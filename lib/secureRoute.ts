import { ORIGIN_URL } from './constants';

const secureRoute = (handler) => {
  return async (req, res) => {
    if (req.headers.referer == undefined) {
      return res.status(401).json({ success: false, message: `Not Authorized`, code: 401 });
    }
    if (new URL(req.headers.referer).origin !== ORIGIN_URL) {
      return res.status(401).json({ success: false, message: `Not Authorized`, code: 401 });
    }
    return handler(req, res);
  };
};

export default secureRoute;
