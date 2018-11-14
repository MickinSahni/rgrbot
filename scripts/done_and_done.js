const done_and_done = `
https://media.giphy.com/media/QXfi9L4qA5HoI/giphy.gif
`;

module.exports = function (robot) {
    robot.hear(/done and done/i , function (res) {
        res.send(done_and_done);
    });
};  
