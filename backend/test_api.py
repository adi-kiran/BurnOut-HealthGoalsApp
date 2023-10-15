import unittest
from base import api, mongo

class APITestCase(unittest.TestCase):
    
    def setUp(self):
        api.config["TESTING"] = True
        self.app = api.test_client()
    
    def test_get_events(self):
        # Make a request to the /events endpoint
        response = self.app.get('/events')
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()
