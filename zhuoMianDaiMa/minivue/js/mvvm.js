//创建一个MVVM框架类
var a = 10;
class MVVM{
    //构造器 （创建实力的模板代码）
    constructor(options){
        //缓存重要属性
        this.$ap = this;
        this.$el = options.el;
        this.$data = options.data;

        //判断视图是否存在
        if(this.$el){
            //创建模板编译器，求解析视图
            this.$compiler = new TemplateComiler(this.$el , this.$ap);
        }
    }
}