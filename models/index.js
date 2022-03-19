const Comments = require("./comments");
const Blog = require("./blog");
const User = require("./user");

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Blog.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });
  
  Comments.belongsTo(Blog, {
    foreignKey: 'blog_id'
  });

  User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Comments.belongsTo(User, {
    foreignKey: 'user_id'
  });

  



module.exports= {Comments, Blog, User};
