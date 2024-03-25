import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

// kiểm tra loại data đúng đắng của prop(ko bắt buộc nhưng nên dùng)
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,// bắt buộc thèn cha phải truyền giá trị xuống
    // các tham số ko có giá trị mặc định(isRequired) thì cần đặt giá trị default
    // vd AlbumList.defaultProps = {tên biến = true/false }
};

function AlbumList({ albumList }) {// albumList này chính là prop
    return (
        <ul className="album-list">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}

        </ul>
    );
}

export default AlbumList;