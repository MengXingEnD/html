//创建一个TemplateComiler模板编译工具
class TemplateComiler{
    //构造函数
    //  1）视图线索
    //  2）全局app对象

    constructor(el , app){
        //  缓存重要的属性


        //  判断视图存在
            //1、把模板内容放入内存（片段）
            var fragment = this.node2fragment(el);

            //2、解析模板
            this.compile(fragment);

            //3、把内存的结果，返回到页面
            el.appendChild(fragment);

    }
}