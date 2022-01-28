export const fetchDislikes = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/dislikes`
  })
}

export const createDislike = (dislike) => {
  return $.ajax({
    method: 'POST',
    url: `/api/dislikes`,
    data: {dislike}
  })
}

export const deleteDislike = (dislikeId) => {
  return $.ajax({
    method: 'DELETE',
    url:  `/api/dislikes/${dislikeId}`
  })
}