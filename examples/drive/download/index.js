window.onload = () => {
    const bucketId = '5b8166b3f58b70d7d433a7f7';
    const fileId = "a16887a10e32282793f2bad6"; //pdf

    const storj = new Storj(environment.storj);

    var file = storj.getFile(bucketId, fileId);

    file.on('done', function cb() {
        console.log('readyyy!');

        file.getBuffer((err, buf) => {
            console.log(file);
            console.log(file.createReadStream());

            file.renderTo('#pdf');

            file.getBlobUrl(function cb(e, blob) {
                console.log(blob);
            });
        })
    });

    file.on('error', function cb(e) {
        console.log(e)
    });
}