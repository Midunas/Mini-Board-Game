import React from 'react'
import { Box } from '@mui/material';
const CharacterDisplay = () => {
  return (
    <Box sx={{ display: 'flex', ml: '30px', gap: '20px' }}>
      <Box>
        <img className='playerImg' src="data:image/png;base64,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" alt="" />
        <input className='playerSelect' type="text" value='data:image/png;base64,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' />
      </Box>
      <Box>
        <img className='playerImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3_s6fOh17OArZ0z1KWO5o_qVC2sWZV7vMw&usqp=CAU" alt="" />
        <input className='playerSelect' type="text" value='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3_s6fOh17OArZ0z1KWO5o_qVC2sWZV7vMw&usqp=CAU' />
      </Box>
      <Box>
        <img className='playerImg' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUSEhASFRIVFRUVFRcYFRUVFRcYFRYWFxUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGyslHyUrNS03Ky4rKy82KzUrNTc1LS0rMC8tLS0tLTctLS0rLS4tLS0rLS0tLS0tLTctLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIGBwMFCAT/xABEEAACAQMCAwMJAwgIBwAAAAAAAQIDBBESIQUGMQcTcRQiIzJBUVJhkXOBszRCU4KhsbLBFSSSk9Lh8PEXJjM1VXTR/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAjEQEBAAIDAAEDBQAAAAAAAAAAAQIRAxIhMSJBUQQTcYGh/9oADAMBAAIRAxEAPwDeIAAERlkpKRaAFgAAAAAAq2BYFMfNlkwJAAAAAAAAIjLO5SUi8egEgAAAAABVsCwKFkwJAAA45SLyRWMQEYlwAAAAAAAUX8y5DQFSyQSJAAAAAABxylktNZREY+0CYxLAAAAAAAApEuQ0BUskEiQAAAAAAAAAAAAAAAAAAArOaW7aS+bwU8ph8cP7SNQ9o/OyuI1rHydxdOvp1600+6m16mn2495rh0o+5fQoy5tXUX48O5uvUvlMPjh/aReFRS6NPwaZ5XVKPuWPBGY8i87LhsKkPJ3U7yaltNQxhYxjS8kY8+76ZcGp43yADQoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0v2gc+U7yEKdurmlOnVbk24wUkoyjhOnNt74e5ug8sX9VRnPPxy9nzZTzZWTUX8Mlu6vw6yqX1Z0ac0qrUpuVRyw9LWrMkm23n3HwcVsaltWnRqTTlTaTcW3FuUYy2yk+kl7P8APNez7l64hcxupQSozpScZao5anpcfNzlbH3XfJ9etxV3FSjCdpKcXLVKDzFUVHeGc+ujH3kv9NHW2MO4dyzXubed1CpTVOCnmMpTUvRrU8JRa+rOntrlRW+p7/66s31ccHp07WtRt6MIaqdVRjFKK1Tg0vlu8GIcm8kaKdTyy1pSm5Jwy4TwtO+GntuczllltT0svj4uz3n2NpOtK48qqqUYKKUlPDTk2/SVFjqunuN62VyqtOFWKajOEZpPGUpJNJ49u55N4e+vgj1Ry7+SW/2FL8OJt4bfhm5ZPl2AAL1AAAAAAAAAAAAAAAFZMCwKY8S0WBIAAAAAAANe9qvM11ZSt1bVFDvFV1eZCeXF09PrJ/E+h1lzyPYTSlKhLLeX6Wqt316S+Zl3N3L9reSpSua0qbpqahicIZU9Or108+qvDJqfinaJcwbUKVDSpOKzGfRbeyfyMX6jHO5eVr4Lj1ZVzJKtQslT4as16fdwhBJVGoRwpLE85wl1Z2nKdW5laUpXcWrlqXeJxUWnrlp82Oy83SU5cXeUqVxLadWlGckvVTnFSaS64395286qX5yz4oxZZedf9a+s3vG/Zw8UlUVGq6SzVVOo6awnmai9Gz2e+DGeROIXzp1P6TWiprXdqUYQzHTvhRW+5lcK0X+dH6o+e/s41MNt7J9MEY5TWrCYy5S2+Mes+QuHrOKEv76t/iPq7PuY7mrf1bOdRO3o06sacdEU0qVSFOHnJZeIvG7MHse0m7efRW/Rfm1P8Zs3krl61p1VeU7iUritScqlPvKbjHvnCpPTFR1JKWEst/M2cGOff2s3Llj1ZwCiXiWTN7EkAAAAAADANkRedykpZLxWwEgAAVRYhoCpZIJEgAAAAAA+a9uNFOc8ZUISljpnSm/5H0SWSsY+8Dz7zvzmuJOl6KNONPX+fr1atO+8VjGl/UxSvTU1hS6PxPVncR+GP0Ri/P3KcuIUqdOlOnTcKmtuSe60uOPN8TNlw5fO/WjHlx+NeMA5A5tdWdOx7hJUqOnvNeW+6UY50ads+Jlt3w3XNy1YzjbGfYl7/kaU49QlbVKtHV51KpKm5RysuEnFte3Dwbe5AspS4XQrOeVpqPfLl/1prqZuTgzx+qRq4+frfK+qlwrEk9fRp+r7nn3nT87c4OwnSirdVO8jN5dTRjS0vheepkHFLCUrK5qKSSjRre/Pm05PY0HY13Jec5S3XV5/eRx8GWf1WJ5P1Ha6tWtqUYZ89PPgZRytzIuH3HlKpxq6qTp416N3ocm3h7+Z0x7cnofuI/DH6Ih0I/DH6I1zhs92yfvTWtPg5d4p5XbUrjRo72OrTq1Y3f52Fn6HZpEQilsixojPQAAAAAbOOTyWmsiMQEYlgAAAAAAAAAAAAAAAAABp/tD7QIV6cIWNxcU6kKr7xx10sxUZLGpPfzsG4DylfVEpzy8efL+Jkx1jHx30qlSUp1JuUpSbbcm3Jt5y2+r+Zt/st5xtFb2vDpSm677yLj3cnBtzqVPW6eqaiuVqjtv0Z3HZtF/0raJ+t3kvv9DUJym46rb3PvONnaQrWcnONWpbT0xjTk4+ljOEctbLdGgLanLGU/24+8zjtrjjia9/k1HC/XqmH2kGk8r2kYTURGyuz7n3yedZ391cVIyjBU03Orhpy1bN7bNG6LS4jVhCpHOmcYzjnZ4kk1t4M8oxqp5w8nqPlz8kt/sKP4cSajKOxABy5AAAAAAAAAAAAAAAAAAAAAAAAAAAPJHF29UvtJfvZ63PJXGvWl9pL97Oo6xZ/wAY5QtqPBre+h3nfVKdtKWZ5hmrGLliOPn7zCeHX0rStC7pae+ptygpedHLi4edFNNrEn7TanNT/wCWrT39zZbfqwNP14+a3/rqTHUdlxvjdXiVVXNxoVVRjTWhOEXGDk1s298yftM17NOT7biFGvOv3mac1GOielYcc77P2mtrWHm/ezc/YXL+rXWf0sfw0R8RF8jSfDnlN/JHq7lz8kt/sKP4cTyjw1bPZ+qj1dy5+SW/2FH8OIpk7EAHLgAAAAAAAAAAAAAAAAKxlkrKWS0EBYAAAAAAKtgfPe3ip4ym85/Z/uYNxXm2HDEqs6UqiqS0JRkk08OWd/Az6VGL6xW3TKTOCtw2hUWKlClLDziVOMkn790U3jyvJMrfJ9luOeMx1p5h4zdq4ua9dR0qrVqVEnu0pycsNrxPjrrzH4fzL84LTxC8hDzYxua6ilsklUkkkl0R1L1fE/qzSjbsLP1fvZaUOh1i1LpJ/Vk5n8T+rA9BcM56p8TcoQoTp90lJuUoyzqytseBm/DL1SUYaWsRW/hhHJb8Jt6eXC3owb66acI58cI+iNKMd1FLwSRmvHl+52l8T3x6ddORsiLyuhxt5OSKLlSQAAAAAAo3nwAuCiXuLJgSAABxylku0RGICMSwAAAAAAAKosQ0BBKQSJA8m85/9yvf/auPxZHVG5O2Hkuzt7WtfUqc1c1K8ZSk6k3FurUzPzG8Lq/A0zB7HTuVYA2b2Rcl2fEaNed1TnKVOrGMdNScMJwUukWs7hLfLZxyeTkkskRj9TlWRjgsAAAAAAACkf2lyGgKlkgkSAAAAAAAAAAAAAAAAAAAHSc38t0+JWztqs5wg5QlmGnVmDyvWTX7DXP/AAbtFV7vyq6xnGfQ56Z/Rm4TqJL+s/ev4SjnzuPXX5i3iku9/hrW57HLSNRQV1dYen9Dnd4/RmeckcnUuF06lOlVq1FUmpt1NGU1HThaYrbCPtv16eP6n8R3A4s8ssspftTkkmOP8AAL1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSfar2j0q1KvYUYXVOvSr6HUzGMPRVGp4lGerDxtt9DEOy+/rS4raKdetJSqTypVJyT9FU6pv5G/LnkrhtScqlSwtpTnJynJ0otylJ5lJvG7bbZex5P4fQqRq0bG3p1I7xnGnGMltjZrps2gnbTXbleVYcTUadarBeTUniNScU251d8RfXZFOzXtLp8OpVYXSu68qlRSg1KM9KUUsN1Jprf3G7eK8r2V1PvLizoVamFHVOEZSws4WX7N39T43yHwv8A8daf3UP/AIDbIwAEAAAAAAAAAAAAAAAAABVsCwKaS0WBIAAAAAAQ2BLKweSsnkvFASAAAAAAFG8+AFwU0/UtFgSAAAAAAFZSwAnL6ko40snKAAAAqWIaAqWSCRIAAAAAAbONyyXaIjHACMSwAAAAAAAKosQ0BXBZIJEgAAAAAFZSwUW5ySjkJAEiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" alt="" />
        <input className='playerSelect' type="text" value='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUSEhASFRIVFRUVFRcYFRUVFRcYFRYWFxUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGyslHyUrNS03Ky4rKy82KzUrNTc1LS0rMC8tLS0tLTctLS0rLS4tLS0rLS0tLS0tLTctLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIGBwMFCAT/xABEEAACAQMCAwMJAwgIBwAAAAAAAQIDBBESIQUGMQcTcRQiIzJBUVJhkXOBszRCU4KhsbLBFSSSk9Lh8PEXJjM1VXTR/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAjEQEBAAIDAAEDBQAAAAAAAAAAAQIRAxIhMSJBUQQTcYGh/9oADAMBAAIRAxEAPwDeIAAERlkpKRaAFgAAAAAAq2BYFMfNlkwJAAAAAAAAIjLO5SUi8egEgAAAAABVsCwKFkwJAAA45SLyRWMQEYlwAAAAAAAUX8y5DQFSyQSJAAAAAABxylktNZREY+0CYxLAAAAAAAApEuQ0BUskEiQAAAAAAAAAAAAAAAAAAArOaW7aS+bwU8ph8cP7SNQ9o/OyuI1rHydxdOvp1600+6m16mn2495rh0o+5fQoy5tXUX48O5uvUvlMPjh/aReFRS6NPwaZ5XVKPuWPBGY8i87LhsKkPJ3U7yaltNQxhYxjS8kY8+76ZcGp43yADQoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0v2gc+U7yEKdurmlOnVbk24wUkoyjhOnNt74e5ug8sX9VRnPPxy9nzZTzZWTUX8Mlu6vw6yqX1Z0ac0qrUpuVRyw9LWrMkm23n3HwcVsaltWnRqTTlTaTcW3FuUYy2yk+kl7P8APNez7l64hcxupQSozpScZao5anpcfNzlbH3XfJ9etxV3FSjCdpKcXLVKDzFUVHeGc+ujH3kv9NHW2MO4dyzXubed1CpTVOCnmMpTUvRrU8JRa+rOntrlRW+p7/66s31ccHp07WtRt6MIaqdVRjFKK1Tg0vlu8GIcm8kaKdTyy1pSm5Jwy4TwtO+GntuczllltT0svj4uz3n2NpOtK48qqqUYKKUlPDTk2/SVFjqunuN62VyqtOFWKajOEZpPGUpJNJ49u55N4e+vgj1Ry7+SW/2FL8OJt4bfhm5ZPl2AAL1AAAAAAAAAAAAAAAFZMCwKY8S0WBIAAAAAAANe9qvM11ZSt1bVFDvFV1eZCeXF09PrJ/E+h1lzyPYTSlKhLLeX6Wqt316S+Zl3N3L9reSpSua0qbpqahicIZU9Or108+qvDJqfinaJcwbUKVDSpOKzGfRbeyfyMX6jHO5eVr4Lj1ZVzJKtQslT4as16fdwhBJVGoRwpLE85wl1Z2nKdW5laUpXcWrlqXeJxUWnrlp82Oy83SU5cXeUqVxLadWlGckvVTnFSaS64395286qX5yz4oxZZedf9a+s3vG/Zw8UlUVGq6SzVVOo6awnmai9Gz2e+DGeROIXzp1P6TWiprXdqUYQzHTvhRW+5lcK0X+dH6o+e/s41MNt7J9MEY5TWrCYy5S2+Mes+QuHrOKEv76t/iPq7PuY7mrf1bOdRO3o06sacdEU0qVSFOHnJZeIvG7MHse0m7efRW/Rfm1P8Zs3krl61p1VeU7iUritScqlPvKbjHvnCpPTFR1JKWEst/M2cGOff2s3Llj1ZwCiXiWTN7EkAAAAAADANkRedykpZLxWwEgAAVRYhoCpZIJEgAAAAAA+a9uNFOc8ZUISljpnSm/5H0SWSsY+8Dz7zvzmuJOl6KNONPX+fr1atO+8VjGl/UxSvTU1hS6PxPVncR+GP0Ri/P3KcuIUqdOlOnTcKmtuSe60uOPN8TNlw5fO/WjHlx+NeMA5A5tdWdOx7hJUqOnvNeW+6UY50ads+Jlt3w3XNy1YzjbGfYl7/kaU49QlbVKtHV51KpKm5RysuEnFte3Dwbe5AspS4XQrOeVpqPfLl/1prqZuTgzx+qRq4+frfK+qlwrEk9fRp+r7nn3nT87c4OwnSirdVO8jN5dTRjS0vheepkHFLCUrK5qKSSjRre/Pm05PY0HY13Jec5S3XV5/eRx8GWf1WJ5P1Ha6tWtqUYZ89PPgZRytzIuH3HlKpxq6qTp416N3ocm3h7+Z0x7cnofuI/DH6Ih0I/DH6I1zhs92yfvTWtPg5d4p5XbUrjRo72OrTq1Y3f52Fn6HZpEQilsixojPQAAAAAbOOTyWmsiMQEYlgAAAAAAAAAAAAAAAAABp/tD7QIV6cIWNxcU6kKr7xx10sxUZLGpPfzsG4DylfVEpzy8efL+Jkx1jHx30qlSUp1JuUpSbbcm3Jt5y2+r+Zt/st5xtFb2vDpSm677yLj3cnBtzqVPW6eqaiuVqjtv0Z3HZtF/0raJ+t3kvv9DUJym46rb3PvONnaQrWcnONWpbT0xjTk4+ljOEctbLdGgLanLGU/24+8zjtrjjia9/k1HC/XqmH2kGk8r2kYTURGyuz7n3yedZ391cVIyjBU03Orhpy1bN7bNG6LS4jVhCpHOmcYzjnZ4kk1t4M8oxqp5w8nqPlz8kt/sKP4cSajKOxABy5AAAAAAAAAAAAAAAAAAAAAAAAAAAPJHF29UvtJfvZ63PJXGvWl9pL97Oo6xZ/wAY5QtqPBre+h3nfVKdtKWZ5hmrGLliOPn7zCeHX0rStC7pae+ptygpedHLi4edFNNrEn7TanNT/wCWrT39zZbfqwNP14+a3/rqTHUdlxvjdXiVVXNxoVVRjTWhOEXGDk1s298yftM17NOT7biFGvOv3mac1GOielYcc77P2mtrWHm/ezc/YXL+rXWf0sfw0R8RF8jSfDnlN/JHq7lz8kt/sKP4cTyjw1bPZ+qj1dy5+SW/2FH8OIpk7EAHLgAAAAAAAAAAAAAAAAKxlkrKWS0EBYAAAAAAKtgfPe3ip4ym85/Z/uYNxXm2HDEqs6UqiqS0JRkk08OWd/Az6VGL6xW3TKTOCtw2hUWKlClLDziVOMkn790U3jyvJMrfJ9luOeMx1p5h4zdq4ua9dR0qrVqVEnu0pycsNrxPjrrzH4fzL84LTxC8hDzYxua6ilsklUkkkl0R1L1fE/qzSjbsLP1fvZaUOh1i1LpJ/Vk5n8T+rA9BcM56p8TcoQoTp90lJuUoyzqytseBm/DL1SUYaWsRW/hhHJb8Jt6eXC3owb66acI58cI+iNKMd1FLwSRmvHl+52l8T3x6ddORsiLyuhxt5OSKLlSQAAAAAAo3nwAuCiXuLJgSAABxylku0RGICMSwAAAAAAAKosQ0BBKQSJA8m85/9yvf/auPxZHVG5O2Hkuzt7WtfUqc1c1K8ZSk6k3FurUzPzG8Lq/A0zB7HTuVYA2b2Rcl2fEaNed1TnKVOrGMdNScMJwUukWs7hLfLZxyeTkkskRj9TlWRjgsAAAAAAACkf2lyGgKlkgkSAAAAAAAAAAAAAAAAAAAHSc38t0+JWztqs5wg5QlmGnVmDyvWTX7DXP/AAbtFV7vyq6xnGfQ56Z/Rm4TqJL+s/ev4SjnzuPXX5i3iku9/hrW57HLSNRQV1dYen9Dnd4/RmeckcnUuF06lOlVq1FUmpt1NGU1HThaYrbCPtv16eP6n8R3A4s8ssspftTkkmOP8AAL1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSfar2j0q1KvYUYXVOvSr6HUzGMPRVGp4lGerDxtt9DEOy+/rS4raKdetJSqTypVJyT9FU6pv5G/LnkrhtScqlSwtpTnJynJ0otylJ5lJvG7bbZex5P4fQqRq0bG3p1I7xnGnGMltjZrps2gnbTXbleVYcTUadarBeTUniNScU251d8RfXZFOzXtLp8OpVYXSu68qlRSg1KM9KUUsN1Jprf3G7eK8r2V1PvLizoVamFHVOEZSws4WX7N39T43yHwv8A8daf3UP/AIDbIwAEAAAAAAAAAAAAAAAAABVsCwKaS0WBIAAAAAAQ2BLKweSsnkvFASAAAAAAFG8+AFwU0/UtFgSAAAAAAFZSwAnL6ko40snKAAAAqWIaAqWSCRIAAAAAAbONyyXaIjHACMSwAAAAAAAKosQ0BXBZIJEgAAAAAFZSwUW5ySjkJAEiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z' />
      </Box>
      <Box>
        <img className='playerImg' src="data:image/png;base64,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" alt="" />
        <input className='playerSelect' type="text" value=' data:image /png;base64,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' />
      </Box>
    </Box>
  )
}

export default CharacterDisplay;