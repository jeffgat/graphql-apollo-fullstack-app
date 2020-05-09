import Resolutions from './resolutions'

// Resolutions.insert({
//   name: "Test Res"
// });


export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    },
  },

  Mutation: {
    createResolution() {
      console.log('created res');
    //   const resolutionId = Resolutions.insert({
    //     name: 'Test Res'
    //   })
    }
  }
};
