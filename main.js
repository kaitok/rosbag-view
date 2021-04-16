const { open } = require('rosbag');

async function logMessagesFromFooBar() {
  try {
    // open a new bag at a given file location:
    const bag = await open('./data/2021-04-08-23-26-13.bag');

    // // read all messages from both the '/foo' and '/bar' topics:
    await bag.readMessages({ topics: ['/carla/ego_vehicle/imu'] }, (result) => {
      //   // topic is the topic the data record was in
      //   // in this case it will be either '/foo' or '/bar'
      //   console.log(result.topic);

      //   // message is the parsed payload
      //   // this payload will likely differ based on the topic
      //   console.log(result.message);
    });

  } catch (e) {
    console.error(e);
  }
}

logMessagesFromFooBar();