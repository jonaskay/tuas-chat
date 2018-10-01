class Message < ApplicationRecord
  validates :body, presence: true

  after_create do
    ActionCable.server.broadcast(
      'chat_channel',
      id: self.id,
      created_at: self.created_at.strftime('%H:%M'),
      body: self.body
    )
  end
end
