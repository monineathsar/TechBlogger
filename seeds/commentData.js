const { Comment } = require('../models');

const commentData = [
  {
    blogPost_id: 1,
    content: "Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Magna fringilla urna porttitor rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Augue lacus viverra vitae congue eu consequat ac felis. Augue ut lectus arcu bibendum at varius vel. Id ornare arcu odio ut sem. Tellus cras adipiscing enim eu turpis egestas pretium aenean.",
    date: '2022-08-22',
    user_id: 2
  },
  {
    blogPost_id: 2,
    content: "Att tellus at urna condimentum mattis pellentesque id nibh tortor. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Eget aliquet nibh praesent tristique magna sit. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Dignissim enim sit amet venenatis urna. Nibh cras pulvinar mattis nunc sed.",
    date: '2022-08-18',  
    user_id: 3
  },
  {
    blogPost_id: 3,
    content: "Tellus cras adipiscing enim eu turpis egestas pretium aenean. Mauris a diam maecenas sed enim ut sem viverra aliquet. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu non diam phasellus vestibulum lorem sed risus. At tellus at urna condimentum mattis pellentesque id nibh tortor. ",
    date: '2022-08-05',
    user_id: 1
  }
      
];

const seedCommentData = () => Comment.destroy({where: {}}).then(() => Comment.bulkCreate(commentData));

module.exports = seedCommentData;