import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { toggleEditPostSection } from '../../PostActions';

import { getShowEditPostSection } from '../../PostReducer';

// Import Style
import styles from './PostListItem.css';

export class PostListItem extends Component {

  render() {
    return (
      <div className={styles['single-post']}>
        <h3 className={styles['post-title']}>
          <Link to={`/posts/${this.props.post.slug}-${this.props.post.cuid}`} >
            {this.props.post.title}
          </Link>
        </h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {this.props.post.name}</p>
        <p className={styles['post-desc']}>{this.props.post.content}</p>
        <p className={styles['post-action']}><a href="#" onClick={this.props.onDelete}><FormattedMessage id="deletePost" /></a></p>
        <p className={styles['post-action']}><a href="#" onClick={this.props.toggleEditPostSection}><FormattedMessage id="editPost" /></a></p>
        <hr className={styles.divider} />
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleEditPostSection: PropTypes.func.isRequired,
};

export default PostListItem;
