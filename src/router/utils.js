const handleError = (req, res) => error => {
    res.status(500).json({
        code: 500,
        message: error.message || 'Unhandled API error.',
    })
};

export const createApiMethod = fn => (req, res) =>
    fn({ ...req.params, ...req.query })
        .then(data => {
            res.json(data)
        })
        .catch(handleError(req, res));

export const createApiPostMethod = fn => (req, res) =>
    fn({ ...req.body, ...req.params })
        .then(data => {
            res.json(data)
        })
        .catch(handleError(req, res));
