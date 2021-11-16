module.exports = (sequelize, Sequelize) => {
  const Bookmarks = sequelize.define("bookmarks", {
      
        videoUrl: {
      type: Sequelize.STRING
    }
  
    
  });

  return Bookmarks;
};
