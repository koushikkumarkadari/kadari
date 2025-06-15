const createMessageController = (MessageModel) => {
    const createMessage = async (req, res) => {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        try {
            const newMessage = new MessageModel({ name, email, message });
            await newMessage.save();
            return res.status(201).json({ message: 'Message saved successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to save message' });
        }
    };

    return { createMessage };
};

export default createMessageController;
