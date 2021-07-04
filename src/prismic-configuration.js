import Prismic from '@prismicio/client';
import env from "react-dotenv";

const apiEndpoint = env.API_ENDPNT
const accessToken = env.TOKEN

const client = Prismic.client(apiEndpoint, { accessToken });

export default client