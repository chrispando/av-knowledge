import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { usePostArticleMutation } from "../slices/articlesApiSlice";
import "./CreatePost.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [issue, setIssue] = useState("");
  const [stepsToResolve, setStepsToResolve] = useState([]); // Updated to array for multiple steps
  const [imgPath, setImgPath] = useState("");

  const navigate = useNavigate();

  const [post] = usePostArticleMutation();

  const { search } = useLocation();
  const sp = new URLSearchParams(search);

  // Access user information from Redux state
  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      date,
      title,
      issue,
      steps_to_resolve: stepsToResolve,
      imgPath,
      author: userInfo?.displayName,
    };

    try {
      const response = await post(newPost).unwrap();

      toast.success("Article created successfully!");
      navigate("/articles");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };
  const handleAddStep = () => {
    setStepsToResolve([...stepsToResolve, ""]);
  };

  const handleRemoveStep = (index) => {
    setStepsToResolve(stepsToResolve.filter((_, i) => i !== index));
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...stepsToResolve];
    updatedSteps[index] = value;
    setStepsToResolve(updatedSteps);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(stepsToResolve);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setStepsToResolve(items);
  };

  return (
    <div className="create-post-container">
      <h2 className="create-post-heading">New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-post-form-group">
          <label className="create-post-text">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="create-post-input"
          />
        </div>

        <div className="create-post-form-group">
          <label className="create-post-text">Issue:</label>
          <textarea
            className="create-post-input"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>

        <div className="create-post-form-group">
          <label className="create-post-text">Steps to Resolve:</label>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="steps">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="steps-list"
                >
                  {stepsToResolve.map((step, index) => (
                    <Draggable
                      key={index}
                      draggableId={`step-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="step-item"
                        >
                          <input
                            type="text"
                            value={step}
                            onChange={(e) =>
                              handleStepChange(index, e.target.value)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveStep(index)}
                            className="remove-step-button"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <button
            type="button"
            onClick={handleAddStep}
            className="add-step-button"
          >
            Add Step
          </button>
        </div>

        <div className="create-post-form-group">
          <label className="create-post-text">Image Path:</label>
          <input
            type="text"
            value={imgPath}
            onChange={(e) => setImgPath(e.target.value)}
            className="create-post-input"
          />
        </div>

        <div>
          <label className="create-post-text">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="create-post-input"
          />
        </div>

        <button type="submit" className="submit-post-button">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
