//Require api components
const { ApiRequest, ApiCountries, ApiSummary } = require('./covid19api_pb')
const { ApiServiceClient } = require('./covid19api_grpc_web_pb')

//Initialize client
var ApiService = new ApiServiceClient(process.env.REACT_APP_GRPC_SERVER)

//Export components
export {
  ApiService,
  ApiRequest,
  ApiCountries,
  ApiSummary,
  ApiServiceClient
}
