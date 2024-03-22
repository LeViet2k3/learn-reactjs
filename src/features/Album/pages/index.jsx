import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Thương mẹ',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/covers/4/d/4d15f8875d0422415815b5b009cfd839_1504775420.jpg'
        },
        {
            id: 2,
            name: 'Tỏ tình nhẹ nhàng thôi',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/5/2/9/e529b59512aefcbd3068ed97461577b3.jpg'
        },
        {
            id: 3,
            name: 'Phải chăng em đã yêu',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/a/0/4/4a040c6d1eda08a8534dc8abe2a74997.jpg'
        },
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;