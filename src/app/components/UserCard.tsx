import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { SOUser } from '../../models/StackoverflowUser';
import { updateSOUsers } from '../../features/stackoverflow/StackoverflowSlice';
import { useAppDispatch } from '../hooks/hooks';
import { FaCheckCircle, FaStopCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import moment from 'moment';
import UserImage from './UserImage';

const UserCard = (props:{ user: SOUser }) => {
    const dispatch = useAppDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleExpand = () => {
        if (!props.user.isBlocked) {
            setIsExpanded(!isExpanded);
        }
    };

    const handleBlock = () => {
        const updatedUser = { ...props.user, isBlocked: !props.user.isBlocked };
        dispatch(updateSOUsers(updatedUser));
        handleExpand();
        if (updatedUser.isBlocked) {
            toast.info(`${props.user.display_name} has been blocked!`);
        }
      };
    
      const handleFollow = () => {
        const updatedUser = { ...props.user, isFollowed: !props.user.isFollowed };
        dispatch(updateSOUsers(updatedUser));
        if (updatedUser.isFollowed) {
            toast.info(`${props.user.display_name} has a new follower!`);
        }else if (!updatedUser.isFollowed) {
            toast.info(`${props.user.display_name} has lost a follower!`);
        }
      };
  
    return (
    <div aria-disabled={props.user.isBlocked}>
        <Card data-test-id={'card-details'} aria-disabled={props.user.isBlocked} style={{ width: '18rem' }} onClick={handleExpand}>
            <UserImage user={props.user} />
            <Card.Body aria-disabled={props.user.isBlocked}>
            <Card.Title aria-disabled={props.user.isBlocked}>
                {props.user.display_name}&nbsp;
                {props.user.isFollowed && <FaCheckCircle className="ml-2" color="green" />}&nbsp;
                {props.user.isBlocked && <FaStopCircle className="ml-2" color="red" />}
            </Card.Title>
            <Card.Text aria-disabled={props.user.isBlocked}>Reputation: {props.user.reputation}</Card.Text>
            <Collapse in={isExpanded}>
                <div>
                <br />
                {!props.user.isBlocked && (
                <>
                    <Button variant="secondary" onClick={handleBlock}>
                    {props.user.isBlocked ? 'Unblock' : 'Block'}
                    </Button>
                    &nbsp;
                    <Button variant="success" onClick={handleFollow}>
                    {props.user.isFollowed ? 'Unfollow' : 'Follow'}
                    </Button>
                </>
                )}
                <br />
                <Card.Text>Location: {props.user.location}</Card.Text>
                <Card.Text>Creation Date: {moment.unix(props.user.creation_date).format("MM/DD/YYYY")}</Card.Text>
                <Card.Link href={props.user.link}>Profile</Card.Link>
                </div>
            </Collapse>
            </Card.Body>
        </Card>
    </div>
    );
  };
  
  export default UserCard;