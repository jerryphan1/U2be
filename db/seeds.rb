# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Video.destroy_all
User.destroy_all
Comment.destroy_all
Like.destroy_all
Dislike.destroy_all
Follow.destroy_all

demo = User.create!(username: 'demo username', password: 'demo password')
u1 = User.create!(username: 'jerryphan1', password: '123456jerryphan1')
u2 = User.create!(username: 'beekayo', password: '123456beekayo')
u3 = User.create!(username: 'cpark02', password: '123456cpark02')
u4 = User.create!(username: 'amandakwc', password: '123456amandakwc')
u5 = User.create!(username: 'laneysama', password: '123456laney')
u6 = User.create!(username: 'triplettam', password: '123456triplettam')
u7 = User.create!(username: 'yuhuanwu', password: '123456yuhuanwu')
u8 = User.create!(username: 'captaincorndog', password: '123456captaincorndog')
u9 = User.create!(username: 'adilwashere13', password: '123456adilwashere13')
u10 = User.create!(username: 'raewastaken', password: '123456raewastaken')
u11 = User.create!(username: 'bifflelee', password: '123456bifflelee')
u12 = User.create!(username: 'disguisedpanda', password: '123456disguisedpanda')
u13 = User.create!(username: 'mishhuang', password: '123456mishhuang')
u14 = User.create!(username: 'dotso', password: '123456dotso')
u15 = User.create!(username: 'thiago_brazil', password: '123456thiago_brazil')

v1 = Video.new(title: 'Valorant Presents its Finest', description: 'Just another day in the life 
  of the worlds best valorant player' ,views: 1200, user_id: u12.id)
v1_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/test_picture.jpg")
v1.thumbnail.attach(io: v1_thumb, filename: 'thumbnail for valorants finest')
v1_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Easy_ace_for_tenz.mp4')
v1.uploaded_video.attach(io: v1_vid, filename: 'Valorant Presents its Finest')
v1.save


v2 = Video.new(title: 'A Little Tom and Jerry', description: 'A video from my childhood that I wanted 
  to share with everyone! Hope yall enjoy!!!' ,views: 4028, user_id: u5.id)
v2_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/image2.jpg")
v2.thumbnail.attach(io: v2_thumb, filename: 'thumbnail for a little tom and jerry')
v2_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Tom+and+Jerry%2C+47+Episode+-+Little+Quacker.mp4')
v2.uploaded_video.attach(io: v2_vid, filename: 'A Little Tom and Jerry')
v2.save


v3 = Video.new(title: 'Looney Tunes Short', description: 'Classic Looney Tunes clip that needed some more love' ,views: 9012, user_id: u13.id)
v3_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/image3.jpg")
v3.thumbnail.attach(io: v3_thumb, filename: 'thumbnail for looney tunes short')
v3_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Those+are+just+quirks-TMtBSYDgt6c.mp4')
v3.uploaded_video.attach(io: v3_vid, filename: 'Looney Tunes Short')
v3.save


v4 = Video.new(title: 'Kalm Kageyama', description: 'dont mess with kalm kageyama.' ,views: 468, user_id: u2.id)
v4_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/kalm.jpg")
v4.thumbnail.attach(io: v4_thumb, filename: 'thumbnail for kalm kageyama')
v4_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Kalm+Kageyama+_+HAIKYU!!+TO+THE+TOP.mp4')
v4.uploaded_video.attach(io: v4_vid, filename: 'Kalm Kageyama')
v4.save


v5 = Video.new(title: 'You hate to see it...', description: 'title speaks for itself.', views: 13890, user_id: u3.id)
v5_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/you_hate_to_see_it.jpg")
v5.thumbnail.attach(io: v5_thumb, filename: 'thumbnail for you hate to see it')
v5_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/You+Hate+to+See+It+-+Disney+Castle-KL3PZ9pceu8.mp4')
v5.uploaded_video.attach(io: v5_vid, filename: 'You hate to see it')
v5.save

v6 = Video.new(title: 'Rae at it again', description: 'nothing more to say here...' ,views: 99999999, user_id: u1.id)
v6_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/rae.jpg")
v6.thumbnail.attach(io: v6_thumb, filename: 'thumbnail for Rae at it again')
v6_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Valkyrae+hair+transformation.mp4')
v6.uploaded_video.attach(io: v6_vid, filename: 'Rae at it again')
v6.save

v7 = Video.new(title: 'A Modern Day Love Story',views: 224, user_id: u4.id)
v7_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/a_love_story.jpg")
v7.thumbnail.attach(io: v7_thumb, filename: 'thumbnail for a modern day love story')
v7_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/a_love_story.mp4')
v7.uploaded_video.attach(io: v7_vid, filename: 'A Modern Day Love Story')
v7.save


v8 = Video.new(title: 'Easiest mang0 dubs', description: 'When the nation faces danger, the 
  only one that can save it is the kid himself' ,views: 1738, user_id: u6.id)
v8_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/easy_mango.jpg")
v8.thumbnail.attach(io: v8_thumb, filename: 'thumbnail for Easiest mang0 dubs')
v8_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/easy_mango.mp4')
v8.uploaded_video.attach(io: v8_vid, filename: 'Easiest mang0 dubs')
v8.save


v9 = Video.new(title: 'Programming Anime Arc', description: 'Day in the life of an average programmer.... 
    nothing special... right?' ,views: 6618, user_id: u7.id)
v9_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/programming_anime.jpg")
v9.thumbnail.attach(io: v9_thumb, filename: 'thumbnail for Programming Anime Arc')
v9_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/If+Programming+Was+An+Anime-pKO9UjSeLew.mp4')
v9.uploaded_video.attach(io: v9_vid, filename: 'Programming Anime Arc')
v9.save


v10 = Video.new(title: 'How to Flip Egg', views: 665, user_id: u8.id)
v10_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/how_to_egg.jpg")
v10.thumbnail.attach(io: v10_thumb, filename: 'thumbnail for How to Flip Egg')
v10_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/How+To+Flip+an+Egg-x2mQmKHgjUI.mp4')
v10.uploaded_video.attach(io: v10_vid, filename: 'How to Flip Egg')
v10.save


v11 = Video.new(title: 'A must see.... Yosemite', description: 'stunning views I grabbed from Yosemite!
    PLEASE visit when you can!!!' ,views: 7822, user_id: u9.id)
v11_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/yosemite_is_amazing.jpg")
v11.thumbnail.attach(io: v11_thumb, filename: 'thumbnail for A must see.... Yosemite')
v11_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Yosemite+HD-N6-2fVsFV8E.mp4')
v11.uploaded_video.attach(io: v11_vid, filename: 'A must see.... Yosemite')
v11.save


v12 = Video.new(title: 'NONE SHALL PASS', description: 'none. shall. pass.' ,views: 3498, user_id: u10.id)
v12_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/none-shall-pass.jpg")
v12.thumbnail.attach(io: v12_thumb, filename: 'thumbnail for NONE SHALL PASS')
v12_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/None_Shall_Pass.mp4')
v12.uploaded_video.attach(io: v12_vid, filename: 'NONE SHALL PASS')
v12.save


v13 = Video.new(title: 'This is it', description: 'no words necessary' ,views: 999999999, user_id: u1.id)
v13_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/rae_supremacy.jpg")
v13.thumbnail.attach(io: v13_thumb, filename: 'thumbnail for this is it')
v13_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/VALKYRAE+MERCH+OFFICIAL+VIDEO-1k1Z9lEXPyI.mp4')
v13.uploaded_video.attach(io: v13_vid, filename: 'This is it')
v13.save

v14 = Video.new(title: 'RIP to the legend', description: 'prayers to one of the greatest, gone too soon.' ,views: 2009, user_id: demo.id)
v14_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/mac_miller.jpg")
v14.thumbnail.attach(io: v14_thumb, filename: 'thumbnail for RIP to the legend')
v14_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Come+Back+To+Earth+Lyrics+-+Mac+Miller-R_UJmYWQydw.mp4')
v14.uploaded_video.attach(io: v14_vid, filename: 'RIP to the legend')
v14.save


c26 = Comment.create(body: 'every album of Macs was a hit. rip.', user_id: u9.id, video_id: v14.id)
c25 = Comment.create(body: 'never forget the legend', user_id: u11.id, video_id: v14.id)
c24 = Comment.create(body: 'RIP. Gone too soon.', user_id: u1.id, video_id: v14.id)
c23 = Comment.create(body: 'SO EXCITTEED', user_id: u7.id, video_id: v13.id)
c22 = Comment.create(body: 'just copped some the other day!!!', user_id: u3.id, video_id: v13.id)
c21 = Comment.create(body: 'omg I was just watching her stream, Youtube algo hits diff', user_id: u14.id, video_id: v13.id)
c20 = Comment.create(body: 'good luck to the simps of the world', user_id: u1.id, video_id: v13.id)
c18 = Comment.create(body: 'Always down for a yosemite trip :)', user_id: u1.id, video_id: v11.id)
c19 = Comment.create(body: 'VERY down for Yosemite!!!', user_id: u10.id, video_id: v11.id)
c17 = Comment.create(body: 'THE EGGS!!!! NOOOOOOOOOO', user_id: u15.id, video_id: v10.id)
c16 = Comment.create(body: 'good thing the internet is the one true source of reliable information', user_id: u14.id, video_id: v10.id)
c15 = Comment.create(body: 'once a buster always a buster bro', user_id: u9.id, video_id: v8.id)
c14 = Comment.create(body: 'thats the mang0', user_id: u7.id, video_id: v8.id)
c12 = Comment.create(body: 'who animated my love story???', user_id: u3.id, video_id: v7.id)
c13 = Comment.create(body: 'what is this.....', user_id: u3.id, video_id: v7.id)
c11 = Comment.create(body: 'stan', user_id: u2.id, video_id: v6.id)
c10 = Comment.create(body: 'I have no words...', user_id: u11.id, video_id: v6.id)
c9 = Comment.create(body: 'sheeeeeeesh', user_id: u10.id, video_id: v6.id)
c6 = Comment.create(body: 'It really do be like that huh', user_id: u3.id, video_id: v5.id)
  c7 = Comment.create(body: 'THIS MAKES ME SO ANGRY', user_id: u3.id, video_id: v5.id)
c8 = Comment.create(body: 'AWEHRLEWVALKQWEQWE', user_id: u3.id, video_id: v5.id)
  c4 = Comment.create(body: 'my kouhai is showing up... impressive', user_id: u5.id, video_id: v4.id)
c5 = Comment.create(body: 'This guys not bad... I guess..', user_id: u13.id, video_id: v4.id)
c3 = Comment.create(body: 'Looney Tunes is my whole childhood! :)', user_id: u4.id, video_id: v3.id)
c2 = Comment.create(body: 'Tom and Jerry... what a classic show', user_id: u2.id, video_id: v2.id)
c1 = Comment.create(body: 'TENZ IS A GOD SHEEESH', user_id: u11.id, video_id: v1.id)

#user 1
like1 = Like.create(user_id: u1.id, video_id: v4.id)
like2 = Like.create(user_id: u1.id, video_id: v6.id)
like3 = Like.create(user_id: u1.id, video_id: v11.id)
like4 = Like.create(user_id: u1.id, video_id: v13.id)
dislike1 = Dislike.create(user_id: u1.id, video_id: v2.id)
dislike2 = Dislike.create(user_id: u1.id, video_id: v8.id)
dislike3 = Dislike.create(user_id: u1.id, video_id: v3.id)

#user 2
like5 = Like.create(user_id: u2.id, video_id: v13.id)
like6 = Like.create(user_id: u2.id, video_id: v6.id)
like7 = Like.create(user_id: u2.id, video_id: v9.id)
dislike4 = Dislike.create(user_id: u2.id, video_id: v10.id)

#user 3 
like8 = Like.create(user_id: u3.id, video_id: v13.id)
like9 = Like.create(user_id: u3.id, video_id: v6.id)
like10 = Like.create(user_id: u3.id, video_id: v11.id)
like11 = Like.create(user_id: u3.id, video_id: v5.id)
dislike5 = Dislike.create(user_id: u3.id, video_id: v2.id)
dislike6 = Dislike.create(user_id: u3.id, video_id: v1.id)

#user 4
like12 = Like.create(user_id: u4.id, video_id: v13.id)
like13 = Like.create(user_id: u4.id, video_id: v6.id)
like14 = Like.create(user_id: u4.id, video_id: v1.id)
like15 = Like.create(user_id: u4.id, video_id: v3.id)
dislike7 = Dislike.create(user_id: u4.id, video_id: v8.id)
dislike8 = Dislike.create(user_id: u4.id, video_id: v9.id)

#user 5
like16 = Like.create(user_id: u5.id, video_id: v13.id)
like17 = Like.create(user_id: u5.id, video_id: v6.id)
like18 = Like.create(user_id: u5.id, video_id: v7.id)
like19 = Like.create(user_id: u5.id, video_id: v4.id)
dislike9 = Dislike.create(user_id: u5.id, video_id: v12.id)
dislike10 = Dislike.create(user_id: u5.id, video_id: v11.id)
dislike11 = Dislike.create(user_id: u5.id, video_id: v3.id)

#user 6
like20 = Like.create(user_id: u6.id, video_id: v13.id)
like21 = Like.create(user_id: u6.id, video_id: v6.id)
like22 = Like.create(user_id: u6.id, video_id: v1.id)
like23 = Like.create(user_id: u6.id, video_id: v2.id)
dislike12 = Dislike.create(user_id: u6.id, video_id: v7.id)
dislike13 = Dislike.create(user_id: u6.id, video_id: v8.id)
dislike14 = Dislike.create(user_id: u6.id, video_id: v11.id)

#user 7
like24 = Like.create(user_id: u7.id, video_id: v13.id)
like25 = Like.create(user_id: u7.id, video_id: v6.id)
like26 = Like.create(user_id: u7.id, video_id: v12.id)
like27 = Like.create(user_id: u7.id, video_id: v11.id)
dislike15 = Dislike.create(user_id: u7.id, video_id: v1.id)
dislike16 = Dislike.create(user_id: u7.id, video_id: v2.id)
dislike17 = Dislike.create(user_id: u7.id, video_id: v3.id)

#user 8
like28 = Like.create(user_id: u8.id, video_id: v13.id)
like29 = Like.create(user_id: u8.id, video_id: v6.id)
like30 = Like.create(user_id: u8.id, video_id: v10.id)
like31 = Like.create(user_id: u8.id, video_id: v1.id)
like32 = Like.create(user_id: u8.id, video_id: v3.id)
like33 = Like.create(user_id: u8.id, video_id: v5.id)

#user 9
like34 = Like.create(user_id: u9.id, video_id: v13.id)
like35 = Like.create(user_id: u9.id, video_id: v6.id)
dislike18 = Dislike.create(user_id: u9.id, video_id: v1.id)
dislike19 = Dislike.create(user_id: u9.id, video_id: v2.id)
dislike20 = Dislike.create(user_id: u9.id, video_id: v12.id)

#user 10
dislike21 = Dislike.create(user_id: u10.id, video_id: v7.id)
dislike22 = Dislike.create(user_id: u10.id, video_id: v4.id)
dislike23 = Dislike.create(user_id: u10.id, video_id: v9.id)

#user 11
like36 = Like.create(user_id: u11.id, video_id: v13.id)
like37 = Like.create(user_id: u11.id, video_id: v6.id)
like38 = Like.create(user_id: u11.id, video_id: v1.id)
like39 = Like.create(user_id: u11.id, video_id: v12.id)

#user 12
like40 = Like.create(user_id: u12.id, video_id: v13.id)
like41 = Like.create(user_id: u12.id, video_id: v6.id)
like42 = Like.create(user_id: u12.id, video_id: v7.id)
like43 = Like.create(user_id: u12.id, video_id: v2.id)
like44 = Like.create(user_id: u12.id, video_id: v11.id)
like45 = Like.create(user_id: u12.id, video_id: v1.id)
dislike24 = Dislike.create(user_id: u12.id, video_id: v3.id)
dislike25 = Dislike.create(user_id: u12.id, video_id: v4.id)
dislike26 = Dislike.create(user_id: u12.id, video_id: v10.id)

#user 14
dislike27 = Dislike.create(user_id: u14.id, video_id: v1.id)
dislike28 = Dislike.create(user_id: u14.id, video_id: v2.id)
dislike29 = Dislike.create(user_id: u14.id, video_id: v8.id)

#demo
like46 = Like.create(user_id: demo.id, video_id: v13.id)
like47 = Like.create(user_id: demo.id, video_id: v6.id)
like48 = Like.create(user_id: demo.id, video_id: v11.id)

#demo 
f1 = Follow.create(user_id: demo.id, user_following_id: u1.id)
f2 = Follow.create(user_id: demo.id, user_following_id: u12.id)
f3 = Follow.create(user_id: demo.id, user_following_id: u8.id)

