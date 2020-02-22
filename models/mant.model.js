const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const SALT_WORK_FACTOR = 10;

const mantSchema = new mongoose.Schema(
    {
        name: { type:String, required: true, trim:true },
        surname: {type:String, required: true, trim:true},
        password: { type:String, required: true},
		email: {type:String, unique: true, match: [EMAIL_PATTERN,"Email Invalido"]},
    },
    {
        timestamps: true
    }
    
)

//Hash Password

mantSchema.pre("save", function(next) {
	const mant = this;
	if (mant.isModified("password")) {
		bcrypt
			.genSalt(SALT_WORK_FACTOR)
			.then(salt => {
				return bcrypt.hash(mant.password, salt).then(hash => {
					mant.password = hash;
					next();
				});
			})
			.catch(error => next(error));
	} else {
		next();
	}
});
mantSchema.methods.checkPassword = function(password) {
	return bcrypt.compare(password, this.password);
};


const Mant = new mongoose.model('Mant', mantSchema)

module.exports = Mant