import React, {Component} from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(dish) {
    if (dish != null) {
      let comments = dish.comments.map(comment => {
        var options = {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        };

        let commentDate = new Date(comment.date).toLocaleDateString(
          'en-US',
          options
        );
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              --{comment.author} , {commentDate}
            </p>
          </li>
        );
      });

      return comments;
    } else {
      return <div />;
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else return <div />;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>

        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {this.renderComments(this.props.selectedDish)}
          </ul>
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
