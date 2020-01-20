<div class="section section-grey">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title text-center">
                                <h2>Đọc nhiều nhất trong ngày</h2>
                            </div>
                        </div>
        
                        <!-- post -->
                        <div class="col-md-4" ng-repeat="i in mostReadInDay"> 
                            <div class="post">
                                <a class="post-img" href="blog-post.html"><img ng-src="{{i.img_src}}" alt=""></a>
                                <div class="post-body">
                                    <div class="post-meta">
                                        <a class="post-category cat-2" href="category.html">{{i.category}}</a>
                                        <span class="post-date">{{i.create_at}}</span>
                                    </div>
                                    <h3 class="post-title"><a href="blog-post.html">{{i.post_title}}</a></h3>
                                </div>
                            </div>
                        </div>
                        <!-- /post -->                                                
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>