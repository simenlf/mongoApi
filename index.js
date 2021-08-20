const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "API server",
    });
});

require("./api/routes/routes")(app);

app.listen(3000, () => {
    console.log(`Contact simen@lighthouse.no for any questions about this API\nServer is running on port 3000`);
});