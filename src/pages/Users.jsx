/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/* 3단계 Users 페이지 테이블 */
/* 4단계 Users 페이지에 검색 + 상태 필터 */
/* 5단계 페이지네이션 - 페이지 상태 추가 */
/* 6단계 CRUD - 1. Edit -> 모달 */
/* 7단계 + α : CRUD - 2. UserModal을 수정 폼(Update Form)으로 변경 */
/* 8단계 CRUD - 3. Delete */
/* 9단계 CRUD - 4. Create */
/* 10단계 API / Hook 구조 분리 */
/*  */
/*  */

import { useState } from "react"; /* 4단계 - 10단계에서 주석처리 */
// import { useEffect, useState } from "react"; /* 10단계 */
// import { users } from "../constants/users"; /* 7단계에서 주석처리 */
import { users as initialUsers } from "../constants/users"; /* 7단계 - 10단계에서 주석처리 */
// import { useUsers } from "../hooks/useUsers"; /* 10단계 */
import UserModal from "../components/UserModal"; /* 6단계 */
import DeleteConfirmModal from "../components/DeleteConfirmModal"; /* 8단계 */
import toast from "react-hot-toast"; /* 9단계 */

function Users() {
    /* 4단계 */
    const [searchKeyword, setSearchKeyword] = useState(""); /* 4단계 */
    const [statusFilter, setStatusFilter] = useState("all"); /* 4단계 */
    /* 5단계 */
    const [currentPage, setCurrentPage] = useState(1); /* 5단계 */
    const itemsPerPage = 5; /* 5단계 */
    /* 6단계 */ 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null); /* 6단계 */
    const [userList, setUserList] = useState(initialUsers); /* 7단계 - 10단계에서 주석처리 */
    /* 10단계 */
    // const { data: users = [], isLoading, isError, refetch } = useUsers();
    // const [userList, setUserList] = useState([]);

    // useEffect(() => {
    //     setUserList(users); /* 10단계 */
    // }, [users]);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); /* 8단계 */
    const [deleteTargetUser, setDeleteTargetUser] = useState(null); /* 8단계 */

    const [isAddModalOpen, setIsAddModalOpen] = useState(false); /* 9단계 - Add 상태 추가 */

    /* 4단계 */
    // const filteredUsers = users.filter((user) => {
        /* 7단계 */
    const filteredUsers = userList.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            user.email.toLowerCase().includes(searchKeyword.toLowerCase());

        const matchesStatus =
            statusFilter === "all" || user.status === statusFilter;

        return matchesSearch && matchesStatus;
    }); /* 4단계 */

    /* 5단계 - 검색/필터 변경 시 1페이지로 돌아가게끔 수정 추가 */
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage); /* 5단계 */

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    /* 7단계 - 저장 함수 추가 */
    const handleSaveUser = (updatedUser) => {
        setUserList((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );

        setIsModalOpen(false);
        setSelectedUser(null);

        toast.success("사용자 정보가 수정되었습니다.");
    };

    /* 8단계 - 삭제 함수 추가 */
    const handleDeleteUser = () => {
        setUserList((prevUsers) =>
            prevUsers.filter((user) => user.id !== deleteTargetUser.id)
        );

        setIsDeleteModalOpen(false);
        setDeleteTargetUser(null);

        toast.success("사용자가 삭제되었습니다.");
    };
    
    /* 9단계 - 사용자 추가 함수 추가 */
    const handleAddUser = (newUser) => {
        const nextId =
            userList.length > 0
                ? Math.max(...userList.map((user) => user.id)) + 1
                : 1;

        setUserList((prevUsers) => [
            {
                id: nextId,
                ...newUser,
            },
            ...prevUsers,
        ]);

        setIsAddModalOpen(false);
        setCurrentPage(1);

        toast.success("사용자가 추가되었습니다.");
    };


    /* 10단계 - 로딩/에러 처리 추가 */ 
    // if (isLoading) {
    //     return <p className="empty-table">사용자 데이터를 불러오는 중입니다.</p>;
    // }

    // if (isError) {
    //     return (
    //         <div className="error-box">
    //             <h3>문제가 발생했습니다.</h3>
    //             <p>사용자 데이터를 불러오지 못했습니다.</p>
    //             <button type="button" onClick={() => refetch()}>
    //                 다시 시도
    //             </button>
    //         </div>
    //     );
    // }

  return (
    <section>
        <div className="page-header">
            <div>
                <p className="page-label">User Management</p>
                <h2>Users</h2>
            </div>

            <div className="page-header-actions">
                {/*4단계*/}
                <div className="page-controls">
                    <input
                        type="text"
                        placeholder="Search users"
                        value={searchKeyword}
                        onChange={(e) => {
                            setSearchKeyword(e.target.value);
                            /* 5단계 - 검색/필터 변경 시 1페이지로 돌아가게끔 수정 추가 */
                            setCurrentPage(1);
                        }}
                    />

                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value)
                            /* 5단계 - 검색/필터 변경 시 1페이지로 돌아가게끔 수정 추가 */
                            setCurrentPage(1);
                        }}
                    >
                        <option value="all">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div> {/*4단계*/}
                
                {/* 9단계 */}
                <button
                    type="button"
                    className="add-button"
                    onClick={() => setIsAddModalOpen(true)}
                >
                    Add User
                </button>
            </div>

        </div>

        <div className="table-card">
            <table className="data-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {/* 4단계 */}
                {filteredUsers.length === 0 ? (
                    <tr>
                        <td colSpan="6" className="empty-table">
                        검색 결과가 없습니다.
                        </td>
                    </tr>
                    ) : ( /* 4단계 */
                    //   filteredUsers.map((user) => ( 
                    /* 5단계 */
                    paginatedUsers.map((user) => ( 
                        <tr key={user.id}>
                            <td>#{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                            <span
                                className={`status-badge ${
                                user.status === "Active" ? "active" : "inactive"
                                }`}
                            >
                                {user.status}
                            </span>
                            </td>
                            <td>
                                {/* 8단계 */}
                                <div className="table-actions">
                                    <button type="button" className="table-button" 
                                        /* 6단계 */  
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                        
                                        {/* 8단계 */}
                                    <button
                                        type="button"
                                        className="table-button danger"
                                        onClick={() => {
                                            setDeleteTargetUser(user);
                                            setIsDeleteModalOpen(true);
                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
            </table>
        </div>

        {/* 5단계 - 3. 버튼 추가 */}
        {filteredUsers.length > 0 && (
            <div className="pagination">
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((page) => page - 1)}
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    type="button"
                    key={index + 1}
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </button>
                ))}

                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((page) => page + 1)}
                >
                    Next
                </button>
            </div>
        )}

        {/* 7단계 + α */}
        {isModalOpen && selectedUser && (
            /* 6단계 */ 
            <UserModal
                key={selectedUser.id} /* 7단계 + α */
                mode="edit" /* 9단계 */
                selectedUser={selectedUser}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedUser(null); /* 7단계 */
                }}
                onSave={handleSaveUser} /* 7단계 */
            />
        )}

        {/* 9단계 - Add Modal 추가 */}
        {isAddModalOpen && (
            <UserModal
                key="add-user"
                mode="add"
                onClose={() => setIsAddModalOpen(false)}
                onSave={handleAddUser}
            />
        )}

        {/* 8단계 */}
        {isDeleteModalOpen && deleteTargetUser && (
            <DeleteConfirmModal
                selectedUser={deleteTargetUser}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setDeleteTargetUser(null);
                }}
                onConfirm={handleDeleteUser}
            />
        )}


    </section>
  );
}

export default Users;