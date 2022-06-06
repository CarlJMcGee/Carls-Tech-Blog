const submitPost = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#new-post-title").value.trim();
  const content = document.querySelector("#new-post-content").value.trim();
  const userId = document.querySelector("#username").dataset.userId;

  if (title && content) {
    try {
      const newPost = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
          user_id: userId,
        }),
        headers: { "Content-Type": "application/json" },
      });

      newPost.ok ? document.location.reload() : window.alert("Failed to Post");
    } catch (err) {
      if (err) throw err;
    }
  }
};

const updatePost = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#edit-post-title").value.trim();
  const content = document.querySelector("#edit-post-content").value.trim();
  const userId = document.querySelector("#username").dataset.userId;
  const postId = document.querySelector("#edit-post-title").dataset.postId;

  if (title && content) {
    try {
      const updatedPost = await fetch(`/api/posts/find/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          content: content,
          user_id: userId,
        }),
        headers: { "Content-Type": "application/json" },
      });

      updatedPost.ok
        ? document.location.reload()
        : window.alert("Failed to Update Post");
    } catch (err) {
      if (err) throw err;
    }
  }
};

const newPostModal = document.querySelector("#new-post-modal");
const editPostModal = document.querySelector("#edit-post-modal");

const toggleModal = function (modal) {
  return function (e) {
    e.preventDefault;

    if ($(modal).hasClass("is-active")) {
      $(modal).removeClass("is-active");
      return;
    }

    $(modal).addClass("is-active");
  };
};

const editPost = function (e) {
  e.preventDefault();
  console.log(e.target.closest(".post").querySelector(".title").textContent);

  const title = e.target.closest(".post").querySelector(".title").textContent;
  const content = e.target
    .closest(".post")
    .querySelector("#content").textContent;
  const postId = e.target.closest(".post").dataset.postId;

  $("#edit-post-title").val(title);
  $("#edit-post-content").val(content);
  $("#edit-post-title").attr("data-post-id", postId);

  $(editPostModal).addClass("is-active");
};

// send post to server
$("#new-post-form").submit(submitPost);
$("#edit-post-form").submit(updatePost);

// modal actions
$("#new-post-btn").click(toggleModal(newPostModal));
$(".close-modal").click(toggleModal(newPostModal));
$(".posts").click(editPost);
$(".close-edit").click(toggleModal(editPostModal));
