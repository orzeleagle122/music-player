import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SearchSong from "./SearchSong";
import Playlist from "./Playlist";
import Modal from "./Modal";

const initialPlaylists = [
    {
        id: 1,
        name: 'hip hop',
        songs: [
            {
                id: 1109222731,
                readable: true,
                title: 'Lose Yourself (From "8 Mile" Soundtrack)',
                title_short: 'Lose Yourself',
                title_version: '(From "8 Mile" Soundtrack)',
                link: 'https://www.deezer.com/track/1109731',
                duration: 326,
                rank: 952888,
                explicit_lyrics: true,
                explicit_content_lyrics: 1,
                explicit_content_cover: 0,
                preview: 'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3',
                md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
                artist: {
                    id: 13,
                    name: 'Eminem',
                    link: 'https://www.deezer.com/artist/13',
                    picture: 'https://api.deezer.com/artist/13/image',
                    picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
                    picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
                    picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
                    picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
                    tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
                    type: 'artist'
                },
                album: {
                    id: 119606,
                    title: 'Curtain Call: The Hits',
                    cover: 'https://api.deezer.com/album/119606/image',
                    cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
                    cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
                    cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
                    cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
                    md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
                    tracklist: 'https://api.deezer.com/album/119606/tracks',
                    type: 'album'
                },
                type: 'track'
            },
            {
                id: 11097001,
                readable: true,
                title: 'Lose Yourself',
                title_short: 'Lose Yourself',
                title_version: '(From "8 Mile" Soundtrack)',
                link: 'https://www.deezer.com/track/1109731',
                duration: 326,
                rank: 952888,
                explicit_lyrics: true,
                explicit_content_lyrics: 1,
                explicit_content_cover: 0,
                preview: 'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3',
                md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
                artist: {
                    id: 13,
                    name: 'Eminem',
                    link: 'https://www.deezer.com/artist/13',
                    picture: 'https://api.deezer.com/artist/13/image',
                    picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
                    picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
                    picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
                    picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
                    tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
                    type: 'artist'
                },
                album: {
                    id: 119606,
                    title: 'Curtain Call: The Hits',
                    cover: 'https://api.deezer.com/album/119606/image',
                    cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
                    cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
                    cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
                    cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
                    md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
                    tracklist: 'https://api.deezer.com/album/119606/tracks',
                    type: 'album'
                },
                type: 'track'
            },
        ]
    },
    {
        id: 2,
        name: 'Hity Dody elektrody',
        songs: []
    },
];

const initialSearchedSong = [
    {
        id: 1109731,
        readable: true,
        title: 'Lose Yourself (From "8 Mile" Soundtrack)',
        title_short: 'Lose Yourself',
        title_version: '(From "8 Mile" Soundtrack)',
        link: 'https://www.deezer.com/track/1109731',
        duration: 326,
        rank: 952888,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview: 'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 119606,
            title: 'Curtain Call: The Hits',
            cover: 'https://api.deezer.com/album/119606/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
            md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
            tracklist: 'https://api.deezer.com/album/119606/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 1109737,
        readable: true,
        title: 'The Real Slim Shady',
        title_short: 'The Real Slim Shady',
        title_version: '',
        link: 'https://www.deezer.com/track/1109737',
        duration: 284,
        rank: 953631,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview: 'https://cdns-preview-d.dzcdn.net/stream/c-d28ee67c24d60e740866c7709d772f55-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 119606,
            title: 'Curtain Call: The Hits',
            cover: 'https://api.deezer.com/album/119606/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
            md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
            tracklist: 'https://api.deezer.com/album/119606/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 3729755,
        readable: true,
        title: 'Beautiful',
        title_short: 'Beautiful',
        title_version: '',
        link: 'https://www.deezer.com/track/3729755',
        duration: 392,
        rank: 720934,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview: 'https://cdns-preview-e.dzcdn.net/stream/c-e92465651c31a0e9d61467de54e1aa35-11.mp3',
        md5_image: '64148d1a543348370dd295e9177258d3',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 350198,
            title: 'Relapse',
            cover: 'https://api.deezer.com/album/350198/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/64148d1a543348370dd295e9177258d3/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/64148d1a543348370dd295e9177258d3/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/64148d1a543348370dd295e9177258d3/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/64148d1a543348370dd295e9177258d3/1000x1000-000000-80-0-0.jpg',
            md5_image: '64148d1a543348370dd295e9177258d3',
            tracklist: 'https://api.deezer.com/album/350198/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 854914332,
        readable: true,
        title: 'Darkness',
        title_short: 'Darkness',
        title_version: '',
        link: 'https://www.deezer.com/track/854914332',
        duration: 337,
        rank: 686164,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview: 'https://cdns-preview-2.dzcdn.net/stream/c-243c0a920bc2c41b18bcd8a20ca5ee41-6.mp3',
        md5_image: '4d00a7848dc8af475973ff1761ad828d',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 127270232,
            title: 'Music To Be Murdered By',
            cover: 'https://api.deezer.com/album/127270232/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/1000x1000-000000-80-0-0.jpg',
            md5_image: '4d00a7848dc8af475973ff1761ad828d',
            tracklist: 'https://api.deezer.com/album/127270232/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 548348702,
        readable: true,
        title: 'Fall',
        title_short: 'Fall',
        title_version: '',
        link: 'https://www.deezer.com/track/548348702',
        duration: 262,
        rank: 702180,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview: 'https://cdns-preview-6.dzcdn.net/stream/c-651d9d92840db585ff2ec2651dc464d8-6.mp3',
        md5_image: 'bf74fc764097630ba58782ae79cfbee6',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 72000342,
            title: 'Kamikaze',
            cover: 'https://api.deezer.com/album/72000342/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/1000x1000-000000-80-0-0.jpg',
            md5_image: 'bf74fc764097630ba58782ae79cfbee6',
            tracklist: 'https://api.deezer.com/album/72000342/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 399224262,
        readable: true,
        title: '\'Till I Collapse',
        title_short: '\'Till I Collapse',
        link: 'https://www.deezer.com/track/399224262',
        duration: 297,
        rank: 667393,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview: 'https://cdns-preview-5.dzcdn.net/stream/c-5537a43419bae1f2f06b45ea99413ec4-8.mp3',
        md5_image: '8a54442174375695509060063023c6c1',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 46967492,
            title: 'The Return of the 3 Kingz, Vol. 4',
            cover: 'https://api.deezer.com/album/46967492/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/8a54442174375695509060063023c6c1/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/8a54442174375695509060063023c6c1/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/8a54442174375695509060063023c6c1/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/8a54442174375695509060063023c6c1/1000x1000-000000-80-0-0.jpg',
            md5_image: '8a54442174375695509060063023c6c1',
            tracklist: 'https://api.deezer.com/album/46967492/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 1109743,
        readable: true,
        title: 'Just Lose It',
        title_short: 'Just Lose It',
        title_version: '',
        link: 'https://www.deezer.com/track/1109743',
        duration: 248,
        rank: 673974,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview: 'https://cdns-preview-3.dzcdn.net/stream/c-3b0ff89db077f237f9c405dc4afaa1e2-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 119606,
            title: 'Curtain Call: The Hits',
            cover: 'https://api.deezer.com/album/119606/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
            md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
            tracklist: 'https://api.deezer.com/album/119606/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 6461440,
        readable: true,
        title: 'Love The Way You Lie',
        title_short: 'Love The Way You Lie',
        title_version: '',
        link: 'https://www.deezer.com/track/6461440',
        duration: 263,
        rank: 920239,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview: 'https://cdns-preview-1.dzcdn.net/stream/c-1ed50e5b3118c99be858fc305609e62a-15.mp3',
        md5_image: 'be682506145061814eddee648edb7c59',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 595243,
            title: 'Recovery',
            cover: 'https://api.deezer.com/album/595243/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/1000x1000-000000-80-0-0.jpg',
            md5_image: 'be682506145061814eddee648edb7c59',
            tracklist: 'https://api.deezer.com/album/595243/tracks',
            type: 'album'
        },
        type: 'track'
    },
    {
        id: 2248427,
        readable: true,
        title: 'Without Me',
        title_short: 'Without Me',
        title_version: '',
        link: 'https://www.deezer.com/track/2248427',
        duration: 291,
        rank: 703662,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview: 'https://cdns-preview-3.dzcdn.net/stream/c-3ac428b642d23584f2706d706cfd5b46-13.mp3',
        md5_image: '2d160b4c0d72272b4f5d7f55037d4864',
        artist: {
            id: 13,
            name: 'Eminem',
            link: 'https://www.deezer.com/artist/13',
            picture: 'https://api.deezer.com/artist/13/image',
            picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
            picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
            picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
            picture_xl: 'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
            tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
            type: 'artist'
        },
        album: {
            id: 224581,
            title: 'Curtain Call: The Hits (Deluxe Edition)',
            cover: 'https://api.deezer.com/album/224581/image',
            cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/56x56-000000-80-0-0.jpg',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/250x250-000000-80-0-0.jpg',
            cover_big: 'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/500x500-000000-80-0-0.jpg',
            cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/1000x1000-000000-80-0-0.jpg',
            md5_image: '2d160b4c0d72272b4f5d7f55037d4864',
            tracklist: 'https://api.deezer.com/album/224581/tracks',
            type: 'album'
        },
        type: 'track'
    }
]

const Main = () => {
    const [playlists, setPlaylists] = useState(initialPlaylists);
    const [searchedSong, setSearchSong] = useState(initialSearchedSong);
    const [selectedSong, setSelectedSong] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {

    }, [playlists])

    return (
        <MainWrapper>
            {isOpenModal
                ? <Modal
                    handleCloseModal={() => setIsOpenModal(false)}
                    playlists={playlists}
                    selectedSong={selectedSong}
                    setPlaylists={setPlaylists}
                />
                : null}
            <Container>
                <Playlist
                    playlists={playlists}
                    setPlaylists={setPlaylists}
                />
                <SearchSong
                    searchedSong={searchedSong}
                    selectedSong={selectedSong}
                    setSelectedSong={setSelectedSong}
                    setPlaylists={setPlaylists}
                    playlists={playlists}
                    setIsOpenModal={setIsOpenModal}
                />
            </Container>

        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;


