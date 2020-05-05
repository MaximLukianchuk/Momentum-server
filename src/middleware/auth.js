import qs from 'querystring';
import crypto from 'crypto';

export const auth = (req, res, next) => {
    try {
        const token = req.params.token;
        const urlParams = req.query;
        const ordered = {};

        Object.keys(urlParams).sort().forEach((key) => {
            if (key.slice(0, 3) === 'vk_') {
                ordered[key] = urlParams[key];
            }
        });

        const stringParams = qs.stringify(ordered);
        const paramsHash = crypto
            .createHmac('sha256', process.env.API_SECRET_KEY)
            .update(stringParams)
            .digest()
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=$/, '');

        if (token !== process.env.API_TOKEN || paramsHash !== urlParams.sign) {
            return res.status(401).json({ message: 'No authorisation' });
        }
        next();
    } catch (e) {
        res.status(401).json({ message: 'No authorisation' });
    }
};
