const getMLResponseFromAPI = (req, res) => {
  console.log("express-logs"); // docker logs be-express-app
  console.log(req.query.url);
  console.log(req.query.patientInfo);

  // call Flask API that runs ML model
  // return response as JSON

  // dummy response
  // res.json({
  // 	annotated_img_url: 'https://xray-corona.s3.ap-south-1.amazonaws.com/1_annotated.png',
  // 	covid_diagnosis: 'Patient diagnosis : Mild COVID-19'
  // });
  res.json({
    consolidation: { low_val: 0, this_val: 2, high_val: 10 },
    fibrosis: { low_val: 0, this_val: 7, high_val: 10 },
    atelectasis: { low_val: 0, this_val: 5, high_val: 10 }
  });
};

exports.getMLResponse = (req, res, next) => {
  console.log(req);
  getMLResponseFromAPI(req, res);
};
