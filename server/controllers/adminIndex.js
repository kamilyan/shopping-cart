module.exports.displayAdminIndexPage = function (req, res, next) {
    return res.render('index');
};

module.exports.displayAdminAddPage = function (req, res, next) {
    let title = "";
    let slug = "";
    let content = "";

    res.render('admin/addPage', {
       title: title,
       slug: slug,
       content: content 
    });
};

