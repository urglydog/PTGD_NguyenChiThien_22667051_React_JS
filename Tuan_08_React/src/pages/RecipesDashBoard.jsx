import Item2 from "../components/Item2";
import img9 from '../img/9.PNG'
import img10 from '../img/10.PNG'
import img11 from '../img/11.PNG'
import img12 from '../img/12.PNG'
import c1 from '../img/Avatar (1).png'
import c2 from '../img/Avatar (2).png'
import c3 from '../img/Avatar (3).png'
import c4 from '../img/Avatar (4).png'
function RecipeDashboard() {
    const editorPicks = [
        {
          img: img9,
          imgChef: c1,
          title: 'Stuffed sticky rice ball',
          time: '34 minutes',
          chefName: 'Jennifer King',
          description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
        },
        {
          img: img10,
          imgChef: c2,
          title: 'Strawberry smoothie',
          time: '40 minutes',
          chefName: 'Matthew Martinez',
          description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
        },
        {
          img: img11,
          imgChef: c3,
          title: 'Latte Art',
          time: '19 minutes',
          chefName: 'Sarah Hill',
          description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
        },
        {
          img: img12,
          imgChef: c4,
          title: 'Butter fried noodles',
          time: '15 minutes',
          chefName: 'Julia Lopez',
          description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
        },
      ];
    
      return (
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-pink-500 mb-1">Editor's pick</h2>
              <p className="text-gray-600">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
            </div>
    
            {/* Recipe Grid */}
            <div className="grid grid-cols-2 gap-6">
              {editorPicks.map((recipe, index) => (
                <Item2 key={index} {...recipe} />
              ))}
            </div>
          </div>
        </div>
      );
  }
  
  export default RecipeDashboard;