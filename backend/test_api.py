import unittest
import mongomock
from base import api
from unittest.mock import patch, Mock

class APITestCase(unittest.TestCase):
    
    def setUp(self):
        self.app = api
        self.app.config['TESTING'] = True
        self.app.mongo_client = mongomock.MongoClient()  # Use mongomock for testing
        self.client = self.app.test_client()

    
    def test_get_events(self):
        # Create a mock collection
        db = self.app.mongo_client['test']
        collection = db['events']

        # Replace the collection's find method with a Mock object
        mock_find = Mock()
        collection.find = mock_find
        mock_find.return_value = [
            {"name": "Event 1"},
            {"name": "Event 2"},
        ]

        response = self.client.get('/events')
        self.assertEqual(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()