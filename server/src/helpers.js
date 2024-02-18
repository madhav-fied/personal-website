import * as path from 'path'
import fse from 'fs-extra'
import _ from 'lodash'

const BLOGS_PARENT_DIR = './src/static/blogs/';


const helpers = {
    getBlogs: function () {
        const blogs = [];
        const blogItems = fse.readdirSync(BLOGS_PARENT_DIR);
        _.each(blogItems, blogDir => {
            const blogPath = path.join(BLOGS_PARENT_DIR, blogDir);
            if(fse.statSync(blogPath).isDirectory()) {
                const metaData = path.join(blogPath, 'metaData.json5');
                const jsonObject = fse.readJSONSync(metaData);
                blogs.push(jsonObject);
            }
        });
        console.log(blogs.length);
        return _.sortBy(blogs, ['id'], ['desc']);
    },

    getBlogContentById: function (blogId) {
        let blogContent = ''
        const blogItems = fse.readdirSync(BLOGS_PARENT_DIR);
        _.each(blogItems, blogDir => {
            const blogPath = path.join(BLOGS_PARENT_DIR, blogDir);
            if(fse.statSync(blogPath).isDirectory()) {
                const metaData = path.join(blogPath, 'metaData.json5');
                const jsonObject = fse.readJSONSync(metaData);
                if(jsonObject["id"] === blogId) {
                    const blogFile = path.join(blogPath, "blog.md");
                    blogContent = fse.readFileSync(blogFile, {
                        encoding: 'utf-8',
                    });
                }
            }
        });
        return blogContent;   
    }
}

export default helpers;
