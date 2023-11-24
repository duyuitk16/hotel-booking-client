import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import moment from 'moment';
import {
    faPaperPlane, faComment
} from "@fortawesome/free-solid-svg-icons";
import SimpleDateTime from 'react-simple-timestamp-to-date';

import { format } from "date-fns";
import { formatISO9075 } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Comments = ({ currentPlaceId }) => {
    const PlaceId = useParams();
    const { user } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState([]);
    const [loadComments, setLoadComments] = useState(false);

    async function handleCreateComment(ev) {
        ev.preventDefault();
        if (user) {
            try {
                const commenter = user?.name;
                const placeId = PlaceId?.id;
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/create-comment`, {
                    method: 'POST',
                    body: JSON.stringify({ placeId, message, commenter }),
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
                if (response.ok) {
                    response.json().then(data => {
                        const newComments = comments.push(data);
                        setComments(newComments)
                        setLoadComments(!loadComments)
                    })
                } else {
                    alert("Wrong credentials");
                }
                setMessage("");
            }
            catch (e) {
                console.log(e)
                alert("Login failed");
            }
        } else {
            alert("you are not login in");
        }
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/comments/${PlaceId.id}`, {
            credentials: 'include',
        }).then(response => {
            response.json().then(data => {
                console.log("🚀 ~ file: Comments.jsx:55 ~ response.json ~ data:", data)
                setComments(data)
            });
        });
    }, [loadComments]);
    return (
        <div className="">
            <h3 className="font-bold text-2xl text-pink-700 mb-8 border-b border-gray-700"><FontAwesomeIcon icon={faComment} className="text-xl mr-2" />Comments</h3>
            <div className="comment-container">
                {comments.length > 0 && comments.map(comment => (
                    <div key={comment._id}>
                        {PlaceId.id == comment.placeId ? (

                            // Comment
                            <div key={comment?._id} className="mb-8">
                                <div className="flex gap-2 items-center">
                                    <div className="bg-black w-8 h-8 flex justify-center items-center rounded-full">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-xl font-bold">
                                        {comment?.commenter}
                                    </div>
                                    <div className="text-sm font-light">
                                        {moment(moment?.createdAt).format("HH:mm a dddd, DD MMM yyyy")}
                                    </div>
                                </div>
                                <div>
                                    {comment?.message}
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                        }
                    </div>
                ))}
            </div>
            <div className="font-bold">
                Write your comment
            </div>
            <div className="flex flex-wrap items-center justify-start py-2">
                <input className="w-3/4 rounded-l-lg px-2"
                    value={message}
                    onChange={ev => setMessage(ev.target.value)}
                />
                <button className="px-4 rounded-r-lg  bg-pink-300" onClick={handleCreateComment}>
                    <FontAwesomeIcon icon={faPaperPlane} className="" />
                </button>
            </div>
        </div>
    )
};

export default Comments;