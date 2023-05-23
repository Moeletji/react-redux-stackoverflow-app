import React, { useState } from 'react';
import { SOUser } from '../../models/StackoverflowUser';
import UserCard from './UserCard';
import { Row, Col, Form, Pagination } from 'react-bootstrap';

const UserList= (props:{ users: SOUser[]}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('reputation');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page when performing a search
    };

    const handleSort = (event: any) => {
        setSortOption(event.target.value);
        setCurrentPage(1); // Reset to first page when performing a search
      };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
    
    const filteredUsers = props.users.filter(
        (user: SOUser) =>
          user?.display_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.location?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortOption === 'reputation') {
          return b.reputation - a.reputation;
        } else if (sortOption === 'name') {
          return a.display_name.localeCompare(b.display_name);
        }
        return 0;
      });

    const totalPages = Math.ceil(sortedUsers.length / pageSize);

    const paginatedUsers = sortedUsers?.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Control
                type="text"
                placeholder="Search users by name or location"
                value={searchQuery}
                onChange={handleSearch}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sort by:</Form.Label>
                <Form.Control as="select" value={sortOption} onChange={(e) => handleSort(e)}>
                    <option value="reputation">Reputation</option>
                    <option value="name">Name</option>
                </Form.Control>
            </Form.Group>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {paginatedUsers?.map((user, index) => (
                <Col key={index}>
                    <UserCard user={user} />
                </Col>
                ))}
            </Row>
            <hr />
            <Pagination>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Pagination.Item>
                ))}
            </Pagination>
        </>    
    );
  };
  
  export default UserList;