module.exports = {
  /**
  * 
  * @param options.spacecraftId The unique identifier of the spacecraft 

  */
  getSpacecraftId: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "description": "<string>",
        "id": "<SpacecraftId>",
        "name": "<string>",
        "type": "<string>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
