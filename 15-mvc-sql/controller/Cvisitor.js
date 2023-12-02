const Visitor = require('../model/Visitor');

//get /
exports.main = (req,res)=>{
    res.render('index');
};
//get /visitor
exports.getVisitors = (req, res) => {
    // [Before]
    // console.log(Visitor.getVisitors()); // [ {}, {}]
    // res.render('visitor', { data: Visitor.getVisitors() });

    // [after]
    Visitor.getVisitors((result) => {
        console.log('Cvisitor reuslt: ',result);
        res.render('visitor',{ data: result });
    });
};

//post /visitor
exports.postVisitor = (req, res) => {
        // console.log('Cvisitor reuslt: ',result);
        const {name, comment} = req.body;
        Visitor.postVisitor(req.body,(result)=>{
            console.log('post Cvisitor.js ',result);
            res.send({id:result, name, comment});
        });
        // res.render('visitor',{ data: result });
};