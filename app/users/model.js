/**
 *
 * Relationship
 *
 * A Meal belongs to a User
 * A User has many Meals
 *
 */

// define what a USER is
var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }]
},
{
  timestamps: true
})

var User = mongoose.model('User', userSchema)
userSchema.plugin(autoIncrement.plugin, 'user')

// export our USER so it can be used in our Node application
module.exports = User
