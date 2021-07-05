
class Launcher
{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	fly(){
        this.launcher.bodyA = null;
    }
    attach(body){

		this.launcher.bodyA=body;
        console.log('rock');
	}
    display(){
        if(this.launcher.bodyA != null){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }
}