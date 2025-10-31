const validate = (shema) => {
    return (req, res, next) => {
        const { error } = shema.validate(req.body);

        if (error) {
            return res.status(400).json(
                { 
                    error: "Validation Error",
                    message: error.details.map(detail => detail.message)
                }
            );
        }

        next();
    };
}

module.exports = validate;