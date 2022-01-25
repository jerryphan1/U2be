# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all
v2 = Video.create(title: 'better test', views: 500, user_id: 1)
v2_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/test_picture.jpg")
v2.thumbnail.attach(io: v2_thumb, filename: 'better_test')
v2_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Easy_ace_for_tenz.mp4')
v2.uploaded_video.attach(io: v2_vid, filename: 'better_vid')
v2.save

v3 = Video.create(title: 'better test', views: 400, user_id: 1)
v3_thumb = open("https://u2be-seeds.s3.us-west-1.amazonaws.com/test_picture.jpg")
v3.thumbnail.attach(io: v3_thumb, filename: 'better_test')
v3_vid = open('https://u2be-seeds.s3.us-west-1.amazonaws.com/Easy_ace_for_tenz.mp4')
v3.uploaded_video.attach(io: v3_vid, filename: 'better_vid')
v3.save