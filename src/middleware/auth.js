export const auth = (req, res, next) => {
    try {
        const token = req.params.token;

        if (token !== process.env.API_TOKEN) {
            return res.status(401).json({ message: 'No authorisation' });
        }
        next();
    } catch (e) {
        res.status(401).json({ message: 'No authorisation' });
    }
};
