using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Jump : MonoBehaviour {

	[Range(1,10)]
	public float jumpVelocity;

	public LayerMask layerGround;
    private bool isGrounded = false;
	public Transform groundCheck;
	public float radiusCheck = 0.2f;

	void Update () {

		isGrounded = Physics2D.OverlapCircle(groundCheck.position, radiusCheck, layerGround);
		
		if(Input.GetButtonDown("Jump") && isGrounded)
			GetComponent<Rigidbody2D>().velocity = Vector2.up * jumpVelocity;
	}
}
