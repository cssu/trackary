json.array!(@users) do |user|
  json.extract! user, :id, :name, :description, :price, :reward_points_cost
  json.url user_url(user, format: :json)
end
