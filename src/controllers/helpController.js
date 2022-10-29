const helpDetails = (req, res) => {
    return res.status(200).send({
        message: "Successfully hitting help api",
        success : true,
        data: {
        contact: "91xxxxxr"
    }
});
}


module.exports = {
    helpDetails
}