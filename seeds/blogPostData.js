const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: "What are you thoughts on remote work?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Magna fringilla urna porttitor rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Augue lacus viverra vitae congue eu consequat ac felis. Augue ut lectus arcu bibendum at varius vel. Id ornare arcu odio ut sem. Tellus cras adipiscing enim eu turpis egestas pretium aenean.",
    user_id: 1
  },
  {
    title: "How much pay should I expect for a bootcamp graduate?",
    content: "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu non diam phasellus vestibulum lorem sed risus. At tellus at urna condimentum mattis pellentesque id nibh tortor. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Eget aliquet nibh praesent tristique magna sit. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Dignissim enim sit amet venenatis urna. Nibh cras pulvinar mattis nunc sed.",
    user_id: 2
  },
  {
    title: "Yearly bonus as a new hire",
    content: "Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Augue lacus viverra vitae congue eu consequat ac felis. Augue ut lectus arcu bibendum at varius vel. Id ornare arcu odio ut sem. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Mauris a diam maecenas sed enim ut sem viverra aliquet. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu non diam phasellus vestibulum lorem sed risus. At tellus at urna condimentum mattis pellentesque id nibh tortor. ",
    user_id: 3
  }

];

const seedBlogData = () => BlogPost.destroy({where: {}}).then(() => BlogPost.bulkCreate(blogPostData));

module.exports = seedBlogData;