// new comment modal toggle
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

const newCommentModal = document.querySelector("#new-comment-modal");

// new comment
const submitComment = async (e) => {
  e.preventDefault();

  console.log(`test 1`);

  const content = document.querySelector("#new-comment-content").value.trim();
  const postId = document.querySelector("#post-title").dataset.postId;

  if (content) {
    console.log(`test 2`);
    try {
      const newComment = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({
          content: content,
          post_id: postId,
        }),
        headers: { "Content-Type": "application/json" },
      });

      newComment.ok
        ? document.location.reload()
        : window.alert("Failed to Post Comment");

      console.log(`test 3`);
    } catch (err) {
      if (err) throw err;
    }
  }
};

// modal actions
$("#new-comment-btn").click(toggleModal(newCommentModal));
$(".close-modal").click(toggleModal(newCommentModal));

// post button submit
$("#new-comment-form").submit(submitComment);
