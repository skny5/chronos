define(["jquery","backbone","underscore","views/application_view","views/jobs_collection_view","views/job_detail_collection_view","views/graph_view","backpack"],function(e,t,n,r,i,s,o,u){var a;return a=t.Router.extend({routes:{"":"index","jobs/*path":"showJob"},initialize:function(){window.app||(window.app={}),n.extend(window.app,{applicationView:new r({collection:window.app.jobsCollection}),jobsCollectionView:new i({collection:window.app.resultsCollection}),detailsCollectionView:new s({collection:window.app.detailsCollection})}),window.app.resultsCollection.on("change",function(){e(".failed-jobs-count").html(this.errorCount),e(".fresh-jobs-count").html(this.freshCount)},window.app.resultsCollection).trigger("reset"),window.app.lightbox=new u.Lightbox,e(".all-jobs-count").html(window.app.resultsCollection.size()),e("#search-form").on("submit",function(e){return e.preventDefault(),!1})},index:function(){app.detailsCollection.reset(),app.resultsCollection.reset(app.jobsCollection.models)},graph:function(){console.log("graph");var e=new o;app.lightbox.addClass("graph-wrapper").content(e).open(),app.graph.init()},showJob:function(e){app.detailsCollection.deserialize(e)}}),a});