module.exports = (sequelize, Sequelize) => {
  const History = sequelize.define("historie", {
     
        videoUrl: {
      type: Sequelize.STRING
    }
  
    
  });

  return History;
};
